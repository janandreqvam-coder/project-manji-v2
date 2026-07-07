import Button from "./Button";

type Props = {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function EmptyState({
  title,
  description,
  buttonText,
  buttonHref,
}: Props) {
  return (
    <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-12 text-center">

      <h2 className="text-4xl font-black text-yellow-400">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
        {description}
      </p>

      {buttonText && buttonHref && (
        <div className="mt-10">
          <Button href={buttonHref}>
            {buttonText}
          </Button>
        </div>
      )}

    </div>
  );
}