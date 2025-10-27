// OdooSavingsSimulator.tsx
import React from "react";
import { PiggyBank, ChevronDown, ChevronUp, Check } from "lucide-react";

type Billing =
  | "per_user_month"
  | "per_user_year"
  | "fixed_month"
  | "fixed_year"
  | "mixed";

type AppItem = {
  key: string;
  name: string;
  billing: Billing;
  price: number;
  note?: string;
  extraPerUserMonth?: number;
  extraPerBlockMonth?: { blockSize: number; amount: number };
  hasUnmodeledVariable?: boolean;
};

const EUR = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

// Icons
const ICONS: Record<string, string> = {
  asana: "/planes_Odoo/asana.svg",
  quickbooks: "/planes_Odoo/quickbooks.svg",
  shopify: "/planes_Odoo/shopify.svg",
  salesforce: "/planes_Odoo/salesforce.svg",
  slack: "/planes_Odoo/slack.svg",
  notion: "/planes_Odoo/notion.svg",
  bamboohr: "/planes_Odoo/bamboohr.svg",
  docusign: "/planes_Odoo/docusign.svg",
  inflow: "/planes_Odoo/inflow.svg",
  wordpress: "/planes_Odoo/wordpress.svg",
  sharepoint: "/planes_Odoo/sharepoint.svg",
  lightspeed: "/planes_Odoo/lightspeed.svg",
  expensify: "/planes_Odoo/expensify.svg",
  calendly: "/planes_Odoo/calendly.svg",
  coupa: "/planes_Odoo/coupa.svg",
  hootsuite: "/planes_Odoo/hootsuite.svg",
  clickup: "/planes_Odoo/clickup.svg",
  hubspot: "/planes_Odoo/hubspot.svg",
  harvest: "/planes_Odoo/harvest.svg",
  zendesk: "/planes_Odoo/zendesk.svg",
  eventbrite: "/planes_Odoo/eventbrite.svg",
  katana: "/planes_Odoo/katana.svg",
  booqable: "/planes_Odoo/booqable.svg",
};

const ODOO_PRICE_PER_USER_YEAR = 238.8;

const APPS: AppItem[] = [
  { key: "asana", name: "Asana", billing: "per_user_month", price: 20 },
  {
    key: "quickbooks",
    name: "Quickbooks",
    billing: "per_user_month",
    price: 76,
  },
  {
    key: "shopify",
    name: "Shopify",
    billing: "fixed_month",
    price: 79,
    note: "1% ingresos + 79 €/mes",
    hasUnmodeledVariable: true,
  },
  {
    key: "salesforce",
    name: "Salesforce",
    billing: "per_user_month",
    price: 165,
  },
  { key: "slack", name: "Slack", billing: "per_user_month", price: 14.1 },
  { key: "notion", name: "Notion", billing: "per_user_month", price: 14 },
  {
    key: "bamboohr",
    name: "BambooHR",
    billing: "fixed_month",
    price: 99,
    note: "99 €/mes + 10 €/usuario/mes",
    extraPerUserMonth: 10,
  },
  { key: "docusign", name: "Docusign", billing: "per_user_month", price: 38 },
  { key: "inflow", name: "Inflow", billing: "fixed_month", price: 349 },
  { key: "wordpress", name: "Wordpress", billing: "fixed_month", price: 25 },
  {
    key: "sharepoint",
    name: "Sharepoint",
    billing: "per_user_month",
    price: 12.5,
  },
  {
    key: "lightspeed",
    name: "Lightspeed",
    billing: "fixed_month",
    price: 120,
    note: "120 €/mes + 29 €/cada 5 usuarios/mes",
    extraPerBlockMonth: { blockSize: 5, amount: 29 },
  },
  { key: "expensify", name: "Expensify", billing: "per_user_month", price: 9 },
  { key: "calendly", name: "Calendly", billing: "per_user_month", price: 16 },
  { key: "coupa", name: "Coupa", billing: "fixed_month", price: 2500 },
  { key: "hootsuite", name: "Hootsuite", billing: "fixed_month", price: 249 },
  { key: "clickup", name: "Clickup", billing: "per_user_month", price: 12 },
  { key: "hubspot", name: "Hubspot", billing: "per_user_month", price: 90 },
  { key: "harvest", name: "Harvest", billing: "per_user_month", price: 14 },
  { key: "zendesk", name: "Zendesk", billing: "per_user_month", price: 115 },
  {
    key: "eventbrite",
    name: "Eventbrite",
    billing: "mixed",
    price: 0,
    note: "1.79 € + 3.7% por ticket",
    hasUnmodeledVariable: true,
  },
  { key: "katana", name: "Katana", billing: "fixed_month", price: 359 },
  {
    key: "booqable",
    name: "Booqable",
    billing: "fixed_month",
    price: 79,
    note: "79 €/mes + 20 €/usuario/mes",
    extraPerUserMonth: 20,
  },
];

// Helpers
function annualize(app: AppItem, users: number): number {
  switch (app.billing) {
    case "per_user_month":
      return app.price * 12 * users;
    case "per_user_year":
      return app.price * users;
    case "fixed_month": {
      const base = app.price * 12;
      const extraUser = app.extraPerUserMonth
        ? app.extraPerUserMonth * 12 * users
        : 0;
      const extraBlock = app.extraPerBlockMonth
        ? Math.ceil(users / app.extraPerBlockMonth.blockSize) *
          app.extraPerBlockMonth.amount *
          12
        : 0;
      return base + extraUser + extraBlock;
    }
    case "fixed_year":
      return app.price;
    case "mixed":
      return app.price * 12;
    default:
      return 0;
  }
}

const OdooSavingsSimulator: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [users, setUsers] = React.useState(1);

  // ✅ Preselecciona solo algunas apps (el resto desmarcadas)
  const PRESELECTED = React.useMemo(
    () => new Set(["asana", "slack", "notion", "docusign", "wordpress"]),
    []
  );

  const [selected, setSelected] = React.useState<Record<string, boolean>>(
    Object.fromEntries(APPS.map((a) => [a.key, PRESELECTED.has(a.key)]))
  );

  const [expanded, setExpanded] = React.useState(false);

  const toggle = (k: string) => setSelected((s) => ({ ...s, [k]: !s[k] }));

  const selectedApps = APPS.filter((a) => selected[a.key]);
  const totalApps = selectedApps.reduce(
    (acc, app) => acc + annualize(app, users),
    0
  );
  const totalOdoo = ODOO_PRICE_PER_USER_YEAR * users;
  const savings = Math.max(totalApps - totalOdoo, 0);

  const visibleApps = expanded ? selectedApps : selectedApps.slice(0, 7);

  return (
    <section className={className}>
      {/* ✅ Título y subtítulo generales */}
      <div className="container mb-8 text-center my-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Reduce tus gastos con Odoo
        </h1>
        <p className="mt-2 text-neutral-800">
          Ahorro calculado según el precio promedio por usuario para cada
          aplicación.
        </p>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 mb-20">
        {/* Selección */}
        <div className="rounded-xl border bg-white p-6 shadow-sm transition-all">
          <h2 className="text-xl font-semibold mb-6">
            ¿Qué software utilizas?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {APPS.map((app) => {
              const on = !!selected[app.key];
              return (
                <button
                  key={app.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(app.key)}
                  className={[
                    "relative flex flex-col items-center justify-center gap-2 rounded-lg border transition-all duration-200 p-4 text-center hover:shadow-sm",
                    on
                      ? "border-violet-600 bg-violet-50 scale-[1.02]"
                      : "border-neutral-200 hover:border-neutral-300",
                  ].join(" ")}
                >
                  {on && (
                    <span className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-700 text-white shadow">
                      <Check size={16} strokeWidth={3} />
                    </span>
                  )}
                  <img
                    src={ICONS[app.key]}
                    alt={app.name}
                    className="h-10 w-10"
                  />
                  <span className="text-sm font-medium">{app.name}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <label className="block text-lg font-semibold mb-2">
              ¿Cuántos usuarios?
            </label>
            <div className="inline-flex items-center gap-2">
              <button
                onClick={() => setUsers((u) => Math.max(1, u - 1))}
                className="h-10 w-10 rounded-lg border border-neutral-300 text-lg font-bold hover:bg-neutral-100 transition"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={users}
                onChange={(e) =>
                  setUsers(Math.max(1, Number(e.target.value || 1)))
                }
                className="h-10 w-20 rounded-lg border border-neutral-300 text-center font-semibold"
              />
              <button
                onClick={() => setUsers((u) => u + 1)}
                className="h-10 w-10 rounded-lg border border-neutral-300 text-lg font-bold hover:bg-neutral-100 transition"
              >
                +
              </button>
            </div>
            <p className="text-sm text-neutral-500 mt-2">
              Calcula el costo según el tamaño de tu equipo.
            </p>
          </div>
        </div>

        {/* Resumen */}
        <aside className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Software a reemplazar</h3>
          <p className="text-sm text-neutral-600 mb-4">
            para {users} {users === 1 ? "usuario" : "usuarios"} — anualizado
          </p>

          <ul className="divide-y">
            {visibleApps.map((app) => {
              const annual = annualize(app, users);
              return (
                <li key={app.key} className="py-2 flex justify-between text-sm">
                  <span className="truncate">{app.name}</span>
                  <span className="tabular-nums font-medium">
                    {EUR.format(annual)}
                  </span>
                </li>
              );
            })}
          </ul>

          {selectedApps.length > 7 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 flex items-center gap-1 text-violet-700 text-sm font-medium hover:underline"
            >
              {expanded ? (
                <>
                  Ver menos <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Ver más <ChevronDown size={16} />
                </>
              )}
            </button>
          )}

          <div className="mt-4 flex items-center justify-between border-t pt-3">
            <span className="font-semibold">TOTAL</span>
            <span className="tabular-nums font-semibold">
              {EUR.format(totalApps)}
            </span>
          </div>

          <h4 className="mt-8 text-xl font-semibold">
            Todas las aplicaciones de Odoo
          </h4>
          <div className="flex justify-between">
            <span className="font-semibold">TOTAL</span>
            <span className="tabular-nums font-semibold">
              {EUR.format(totalOdoo)}
            </span>
          </div>

          <div className="mt-8 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 p-5 text-center shadow-inner">
            <div className="text-2xl font-bold text-emerald-800 mt-1 tabular-nums">
              {EUR.format(savings)}{" "}
              <span className="text-lg font-medium">/ año</span>
            </div>
            <p className="text-sm text-emerald-700 mt-1">
              Por gestionar toda tu empresa con Odoo.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default OdooSavingsSimulator;
