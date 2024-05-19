

import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  //reset,
  redirect,
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    console.log(data)
    const response = await fetch(`${baseUrl}/${endpoint}`,{
      method: "POST",
      headers: {
       
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // const newCustomer = await response.json()
      setLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      redirect()
      //reset()


    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("The Giving Warehouse Stock is NOT Enough");
      } else {
       
        toast.error("Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
 }
export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
  
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    //fetch('http://localhost:3000/api/category')
    console.log(data);

    const body =JSON.stringify(data)
    console.log(body);
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:body
    },
    { cache: 'no-store' }
    );
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
     
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}