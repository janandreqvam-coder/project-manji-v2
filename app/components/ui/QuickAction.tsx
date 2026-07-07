import Link from "next/link";
import Card from "./Card";

type Props = {
  icon: string;
  title: string;
  href: string;
};

export default function QuickAction({
  icon,
  title,
  href,
}: Props) {
  return (
    <Link href={href} className="block">
      <Card className="h-full p-8 text-center">

        <div className="text-5xl">
          {icon}
        </div>

        <h3 className="mt-6 text-2xl font-black">
          {title}
        </h3>

      </Card>
    </Link>
  );
}