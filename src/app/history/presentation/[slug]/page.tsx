import { dummyPresentations } from '../../../../../dummy-presentations';

type PageProps = {
  params: { slug: string };
};

export default async function PresentationPage({ params }: PageProps) {
  const { slug } = await params;

  const presentation = dummyPresentations.find((p) => p.id === slug);

  return (
    <div>
      <h2>{presentation?.title}</h2>
      <p>{presentation?.description}</p>
    </div>
  );
}
