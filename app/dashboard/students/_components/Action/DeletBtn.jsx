'use client'

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import Swal from "sweetalert2";

export default function DeleteBtn({endpoint }) {
 
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
        const res = await fetch(`${baseUrl}/api/students/${endpoint}`, {
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
          className="font-medium  flex items-center space-x-1"
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