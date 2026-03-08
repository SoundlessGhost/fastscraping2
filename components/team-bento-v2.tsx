"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, MapPin, TrendingUp, Github } from "lucide-react";

// Team Data - Easy to update
const teamMembers = [
  {
    name: "Md Khalid Mahmud Shawon",
    role: "Founder & CEO",
    description:
      "Specializing in Enterprise Web Scraping, Data Pipeline Engineering, and LinkedIn API solutions. Built FastScraping to solve data extraction challenges that other vendors couldn't handle.",
    image: "/shawon.jpg",
    location: "Bangladesh",
    isFounder: true,
    links: {
      linkedin: "https://linkedin.com/in/md-khalid-mahmud-shawon",
      upwork: "https://upwork.com/freelancers/khalidalsaba",
      email: "hello@fastscraping.com",
    },
  },
  {
    name: "MD Shahed Abid",
    role: "CTO",
    description:
      "Leading technical architecture and infrastructure decisions. Expert in building scalable data pipelines and distributed systems.",
    image: "/team/shawon.jpg",
    location: "Bangladesh",
    isFounder: false,
    links: {
      linkedin: "https://linkedin.com/in/shahed-abid", // Update with real link
      email: "shahed@fastscraping.com",
    },
  },
  {
    name: "Silent Ghost",
    role: "Head of Anti-Bot Research",
    description:
      "Expert in bypassing Cloudflare, DataDome, PerimeterX, and Akamai. Developing cutting-edge stealth browser technology.",
    image: "/team/shawon.jpg",
    location: "Bangladesh",
    isFounder: false,
    links: {
      linkedin: "https://linkedin.com/in/silent-ghost", // Update with real link
      email: "research@fastscraping.com",
    },
  },
];

// ============================================
// BENTO GRID V2 - Equal Prominence for All
// ============================================
export function TeamBentoGridV2() {
  const founder = teamMembers.find((m) => m.isFounder);
  const team = teamMembers.filter((m) => !m.isFounder);
  return (
    <>
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
              The experts behind FastScraping's success
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
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{member.location}</span>
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
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Founder - Full Width */}
          {founder && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-sage/20 shadow-soft-lg">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/30 lg:bg-gradient-to-t lg:from-primary/50 lg:via-transparent lg:to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block w-fit px-4 py-1.5 bg-mint text-primary text-sm font-bold rounded-full mb-4">
                      {founder.role}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-2 font-display">
                      {founder.name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-500 mb-6">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <span>{founder.location}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {founder.description}
                    </p>

                    <div className="flex gap-4">
                      {founder.links.linkedin && (
                        <a
                          href={founder.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0077B5] text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                          <Linkedin className="w-5 h-5" />
                          LinkedIn
                        </a>
                      )}
                      {founder.links.upwork && (
                        <a
                          href={founder.links.upwork}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#14A800] text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                          <TrendingUp className="w-5 h-5" />
                          Upwork
                        </a>
                      )}
                      {founder.links.email && (
                        <a
                          href={`mailto:${founder.links.email}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                          <Mail className="w-5 h-5" />
                          Contact
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Team Members - Equal Size Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-sage/20 shadow-soft-lg group"
              >
                <div className="grid sm:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-48 sm:h-full min-h-[280px] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-primary/20" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-center">
                    <span className="inline-block w-fit px-3 py-1 bg-sage/30 text-primary text-sm font-medium rounded-full mb-3">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {member.name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{member.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {member.description}
                    </p>

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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================
// ALTERNATIVE: Founder Highlighted + Team Same Size
// ============================================
export function TeamBentoGridV3() {
  const founder = teamMembers.find((m) => m.isFounder);
  const team = teamMembers.filter((m) => !m.isFounder);

  return (
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
        </motion.div>

        {/* Founder - Full Width */}
        {founder && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-white rounded-3xl overflow-hidden border border-sage/20 shadow-soft-lg">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/30 lg:bg-gradient-to-t lg:from-primary/50 lg:via-transparent lg:to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block w-fit px-4 py-1.5 bg-mint text-primary text-sm font-bold rounded-full mb-4">
                    {founder.role}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-2 font-display">
                    {founder.name}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-500 mb-6">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span>{founder.location}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {founder.description}
                  </p>

                  <div className="flex gap-4">
                    {founder.links.linkedin && (
                      <a
                        href={founder.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0077B5] text-white rounded-full hover:opacity-90 transition-opacity"
                      >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                      </a>
                    )}
                    {founder.links.upwork && (
                      <a
                        href={founder.links.upwork}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#14A800] text-white rounded-full hover:opacity-90 transition-opacity"
                      >
                        <TrendingUp className="w-5 h-5" />
                        Upwork
                      </a>
                    )}
                    {founder.links.email && (
                      <a
                        href={`mailto:${founder.links.email}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full hover:opacity-90 transition-opacity"
                      >
                        <Mail className="w-5 h-5" />
                        Contact
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Team Members - Equal Size Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-sage/20 shadow-soft-lg group"
            >
              <div className="grid sm:grid-cols-2">
                {/* Image */}
                <div className="relative h-48 sm:h-full min-h-[280px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-primary/20" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 bg-sage/30 text-primary text-sm font-medium rounded-full mb-3">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{member.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
