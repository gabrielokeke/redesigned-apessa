// app/resources/[slug]/page.tsx
interface ResourcePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const resourceDetails = {
  "resource-1": {
    title: "Resource 1",
    content: "Full detailed content about Resource 1.",
    imageUrl: "/resource1.jpg",
  },
  "resource-2": {
    title: "Resource 2",
    content: "Full detailed content about Resource 2.",
    imageUrl: "/resource2.jpg",
  },
  "resource-3": {
    title: "Resource 3",
    content: "Full detailed content about Resource 3.",
    imageUrl: "/resource3.jpg",
  },
  "resource-4": {
    title: "Resource 4",
    content: "Full detailed content about Resource 4.",
    imageUrl: "/resource4.jpg",
  },
  "resource-5": {
    title: "Resource 5",
    content: "Full detailed content about Resource 5.",
    imageUrl: "/resource5.jpg",
  },
  "resource-6": {
    title: "Resource 6",
    content: "Full detailed content about Resource 6.",
    imageUrl: "/resource6.jpg",
  },
};

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params; // Add await here
  const resource = resourceDetails[slug as keyof typeof resourceDetails];

  if (!resource) {
    return (
      <article className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">Resource not found</h1>
        <p className="mt-4 text-gray-700">
          The resource you are looking for does not exist.
        </p>
      </article>
    );
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{resource.title}</h1>
      <img
        src={resource.imageUrl}
        alt={resource.title}
        className="w-full h-64 object-cover mb-6 rounded"
      />
      <p className="text-lg">{resource.content}</p>
    </article>
  );
}