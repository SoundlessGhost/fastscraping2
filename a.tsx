<section className="py-24 bg-cream">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage/30 text-primary text-sm font-medium mb-6">
        Our Team
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary tracking-tight">
        Meet the <span className="text-gradient">People</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        The battle-tested engineers and data specialists behind FastScraping
        enterprise-grade success
      </p>
    </motion.div>

    {/* Grid Layout - All cards same size */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-3xl overflow-hidden border border-sage/20 shadow-soft-lg group hover:shadow-xl transition-all duration-300"
        >
          {/* Image - Same size for everyone */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

            {/* Role Badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <span
                className={`inline-block px-3 py-1.5 ${
                  member.isFounder
                    ? "bg-mint text-primary"
                    : "bg-white/20 backdrop-blur-sm text-white"
                } text-sm font-semibold rounded-full`}
              >
                {member.role}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary mb-1">
              {member.name}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>{member.location}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Award className="w-4 h-4 text-secondary" />
              <span>{member.achievements}</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {member.description}
            </p>

            {/* Social Links - Same for everyone */}
            <div className="flex gap-3">
              {member.links.linkedin && (
                <a
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.links.upwork && (
                <a
                  href={member.links.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#14A800] flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <TrendingUp className="w-5 h-5" />
                </a>
              )}
              {member.links.email && (
                <a
                  href={`mailto:${member.links.email}`}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>;
