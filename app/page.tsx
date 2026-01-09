import Link from "next/link";

export default function LandingPage() {
  const formats = [
    {
      id: "json",
      name: "JSON",
      title: "JavaScript Object Notation",
      description: "The most commonly used standard for sharing data and building web APIs.",
      pros: ["Human-readable", "Universal support", "Native to JavaScript"],
      cons: ["No comments", "Verbose closing tags (none, but brackets)", "No undefined"],
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "yaml",
      name: "YAML",
      title: "YAML Ain't Markup Language",
      description: "A human-friendly data serialization standard for all programming languages.",
      pros: ["Clean syntax", "No brackets/quotes", "Supports comments"],
      cons: ["Whitespace sensitive", "Complex specification", "Parsing overhead"],
      color: "from-red-500 to-pink-600",
    },
    {
      id: "toml",
      name: "TOML",
      title: "Tom's Obvious, Minimal Language",
      description: "A config file format for humans.",
      pros: ["Easy to read", "Strongly typed", "Great for configs"],
      cons: ["Verbosely hierarchical", "Less universal than JSON"],
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: "xml",
      name: "XML",
      title: "Extensible Markup Language",
      description: "A markup language that defines a set of rules for encoding documents.",
      pros: ["Schema support (XSD)", "Standardized", "Metadata rich"],
      cons: ["Extremely verbose", "Hard to read manually", "Parsing complexity"],
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Master Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Data Formats
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Convert, validate, and understand the most crucial data serialization formats used in modern engineering. From simple JSON to complex XML structures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/convert"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform duration-200"
            >
              Start Converting
            </Link>
            <Link
              href="/validate"
              className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              Validate Data
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Supported Formats</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formats.map((format) => (
              <div
                key={format.id}
                className="group relative p-8 rounded-3xl bg-gray-900/50 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${format.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${format.color} blur-[100px] opacity-10 group-hover:opacity-20 transition-all duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold">{format.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300`}>
                      .{format.id}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 text-lg">{format.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wider">Pros</h4>
                      <ul className="space-y-2">
                        {format.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-green-500 mt-1">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wider">Cons</h4>
                      <ul className="space-y-2">
                        {format.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-red-500 mt-1">✕</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
