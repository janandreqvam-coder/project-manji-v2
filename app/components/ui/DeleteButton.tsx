"use client";

import { useTransition } from "react";
import { deleteCar } from "@/app/admin/actions";

type Props = {
  id: number;
};

export default function DeleteButton({ id }: Props) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (!confirm("Are you sure you want to delete this car?")) {
      return;
    }

    startTransition(async () => {
      await deleteCar(id);
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold transition hover:bg-red-500 disabled:opacity-50"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}