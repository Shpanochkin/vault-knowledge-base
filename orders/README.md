# Monthly KPI Orders

Local-only generator for monthly KPI Orders (Sales / BD). Outputs are **not** deployed to kb.vault.ist.

## Usage

```bash
# Drop a JSON for the month into orders/inputs/
cp orders/examples/2026-05-sales.example.json orders/inputs/2026-05-sales.json
# Edit the file with the actual numbers, then:
npm run orders
```

PDFs (EN + RU) appear in `output/orders/`:

```
output/orders/
  Order-Sales-2026-05-EN.pdf
  Order-Sales-2026-05-RU.pdf
  Order-BD-2026-05-EN.pdf
  Order-BD-2026-05-RU.pdf
```

Sign with Zoho Sign and post to Zoho People for team acknowledgement.

## Filtering

```bash
# Only one specific JSON
npm run orders -- 2026-05-sales
```

## Layout

- `orders/examples/` — committed templates, do not edit
- `orders/inputs/` — local working files, **gitignored** (contain employee plan data)
- `output/orders/` — generated PDFs, **gitignored**

## JSON shape

See the two example files. Two `type` values are supported:
- `"sales"` — produces `Sales KPI Order` based on the Sales Manager KPI Standards doc
- `"bd"` — produces `BD KPI Order` based on the Business Developer KPI Standards doc

Empty / unknown KPI subgroups are skipped from the rendered tables.
