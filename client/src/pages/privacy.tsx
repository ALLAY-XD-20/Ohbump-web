export default function Privacy() {
  return (
    <div className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-display font-bold text-white">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: December 2024</p>
      </div>

      <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6 text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">1. Introduction</h2>
          <p>OHBump ("we", "our", or "us") operates the OHBump Discord bot. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">2. Information Collection</h2>
          <p>We collect information to provide better service to you. The types of information we collect include:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Discord User ID and server ID</li>
            <li>Bumping preferences and schedule</li>
            <li>Server statistics and bump history</li>
            <li>Usage logs and analytics</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">3. Use of Data</h2>
          <p>OHBump uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features</li>
            <li>To monitor the usage of our service</li>
            <li>To detect and prevent fraud</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">4. Security of Data</h2>
          <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal data.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">5. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-white">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="mt-3 p-4 bg-black/40 rounded-lg border border-white/10">
            <p className="text-white font-semibold">Email: faybuilder.id@gmail.com</p>
            <p className="text-white font-semibold mt-2">Support Server: <a href="https://discord.gg/WgaAFQQQFP" className="text-primary hover:text-primary/80">discord.gg/WgaAFQQQFP</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
