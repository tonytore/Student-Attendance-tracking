'use client'

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import Swal from "sweetalert2";

export default function DeleteBtn({endpoint,title }) {
 
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
   //const confirmed = confirm("Are you sure?");
  async function handleDelete() {
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`${baseUrl}/api/${endpoint}`, {
          method: "DELETE",
        });
        console.log(res);
        if (res.ok) {
          router.refresh();
          setLoading(false);
          toast.success(`${title} Deleted Successfully`);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      } else {
        setLoading(false);
        toast.success("Not Deleted");
        Swal.fire({
          title: "Error!",
          text: "something went wrong.",
          icon: "success"
        });
      }
    });
  }
  return (
    <>
      {loading ? (
        <Button
          disabled
          type="button"
          className="mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-[0.5rem] px-5 py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 inline-flex items-center "
        >
        
          <LoaderIcon className="animate-spin"/>
        </Button>
      ) : (
        <Button
          onClick={handleDelete}
          variant="destructive"
          className="font-medium  flex items-center space-x-1"
        >
          <Trash className="w-4 h-4" />
         
        </Button>
      )}
    </>
  );
}