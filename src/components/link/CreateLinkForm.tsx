"use client";

import { useState } from "react";
import { nanoid } from "nanoid";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

export default function CreateLinkForm() {
  const { push } = useRouter();
  const [formData, setFormData] = useState({
    url: "",
    slug: "",
    description: "",
  });

  const createPost = api.link.create.useMutation({
    onSuccess: () => {
      push("/dashboard");
    },
  });

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost.mutate(formData);
  };

  const handleRandomSlug = () => {
    setFormData({ ...formData, slug: nanoid(6) });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the URL:
          <input
            type="text"
            name="url"
            onChange={handleInputChange}
            value={formData.url}
            required={true}
          />
        </label>
        <label>
          Custom slug:
          <input
            type="text"
            name="slug"
            onChange={handleInputChange}
            value={formData.slug}
            required={true}
          />
          <button type="button" onClick={handleRandomSlug}>
            Random
          </button>
        </label>
        <label>
          Description (optional):
          <textarea
            name="description"
            onChange={handleInputChange}
            value={formData.description}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
