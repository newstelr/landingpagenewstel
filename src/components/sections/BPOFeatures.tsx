
const BPOFeatures = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our UK BPO Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Focus",
              subtitle: "Focus on core business while we handle the rest",
            },
            {
              title: "Cost Efficiency",
              subtitle: "Reduce operational costs by up to 40%",
            },
            {
              title: "Specialized Expertise",
              subtitle: "Access to industry professionals and advanced technologies",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BPOFeatures;
