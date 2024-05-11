import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import dummyData from "../dummy";
import { useEffect } from "react";

const EventPage = () => {
  let params = useParams();
  const {
    register,
    handleSubmit,
    onBlur,
    formState: { errors },
  } = useForm({});

  // const onSubmit = async (formData) => {

  //   const reqData = {
  //     email: formData.email,
  //     password: formData.password,
  //   };

  return (
    <>
      <div className=" max-h-screen mt-32 flex items-center justify-center">
        <div className="productcontainer border-2 text-slate-800 flex items-center justify-center rounded-lg">
          <div className="  flex items-center justify-center">
            <div className="flex items-center w-[400px]	border-black p-5">
              <img
                className="prod-image h-[400px] w-[400px]"
                src={`https://source.unsplash.com/200x200/?event`}
                alt="productImage"
              />
            </div>

            <div className="">
              <form
                className=""
                // onSubmit={handleSubmit(onSubmit)}
              >
                {/* on form submission, react hook form ko euta built in method handleSubmit call garincha, ani tesle in turm onSubmit bhanne hamile banako funtion call gardincha, ani tyatai data bhanne object aaucha from the input fields after being registered. */}
                {/* ani also yo e.preventdefault haru garirakhnuparena on submission cause yo sabai reacthookform ko useForm le nai milaidincha, validation haru yup le milaidincha */}

                <div>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="w-[200px] border-3 border-black bg-slate-100 m-5 p-2 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    className="w-[200px] border-3 border-black bg-slate-100 m-5 p-2 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className="w-[200px] border-3 border-black bg-slate-100 m-5 p-2 rounded-md"
                  />
                </div>
                <div className="pt-8 flex items-center justify-center">
                  <button
                    type="button"
                    className="h-10 w-40 border-slate-900 rounded-lg bg-green-100 hover:cursor-pointer text-lg font-medium flex items-center justify-center mt-5"
                    // onClick={() => {}}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
