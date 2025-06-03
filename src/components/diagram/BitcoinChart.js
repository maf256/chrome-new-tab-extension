import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// -----------------------------------------------------------------------------
// BitcoinChart Component – Tailwind‑only version (no shadcn/ui dependency)
// Props:
//   days  – number (default 30) – how many trailing days of data to show
// -----------------------------------------------------------------------------

function BitcoinChart({ days = 30 }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error(`Network error: ${res.status}`);

        const json = await res.json();
        const formatted = (json.prices || []).map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price: +price.toFixed(2),
        }));
        setData(formatted);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
    
  }, [days]);

  // ---------------------------------------------------------------------------
  // Render helpers
  // ---------------------------------------------------------------------------

  const ChartBody = () => (
    <ResponsiveContainer width="100%" height={800} minHeight={300} minWidth={1000}>
      <LineChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
        <Line type="monotone" dataKey="price" strokeWidth={2} dot={false} />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid place-items-center"
    >
      {/* Card wrapper – Tailwind styled */}
      <div className="w-full max-w-3xl rounded-2xl bg-white dark:bg-neutral-900 shadow-lg p-6">
        {/* Header */}
        {/* <header className="pb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Bitcoin Price (last {days} days)
          </h2>
        </header> */}

        {/* Content */}
        {loading && (
          <p className="py-6 text-center text-gray-500">Loading chart…</p>
        )}

        {error && (
          <p className="py-6 text-center text-red-500">Error: {error}</p>
        )}

        {!loading && !error && <ChartBody />}
      </div>
    </motion.div>
  );
}

export default BitcoinChart;
