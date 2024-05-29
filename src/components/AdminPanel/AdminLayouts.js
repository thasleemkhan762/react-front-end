import React from "react";
import Header from "../common/Header";
import AdminForm from "./AdminForm/AdminForm";

const AdminLayouts = () => {
  return (
    <div className="Mainpage">
      <div className="container">
        <div className="Main_Heading">
          <Header name={"Admin Panel"} display={"none"} />
        </div>
        <AdminForm />
      </div>
    </div>
  );
};

export default AdminLayouts;

// const AdminLayouts = () => {
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     defaultValues: {
//         email: "test@gmail.com",
//     }
//   });

//   const onSubmit = async (data) => {
//     try{
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         console.log(data);
//         throw new Error();
//     }catch{
//         setError("root", {message:"This email is already taken"});
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register("email", {
//           required: "Email required",
//           validate: (value) => {
//             if (!value.includes("@")) {
//               return "Email must include @";
//             }
//             return true;
//           },
//         })}
//         type="text"
//         placeholder="Email"
//       />
//       {errors.email && <div>{errors.email.message}</div>}
//       <input
//         {...register("password", {
//           required: "Password required",
//           minLength: {
//             value: 4,
//             message: "Minimum length should be 4",
//           },
//         })}
//         type="password"
//         placeholder="Password"
//       />
//       {errors.password && <div>{errors.password.message}</div>}
//       <button disabled={isSubmitting} type="submit">
//         {isSubmitting ? "Loading..." : "submit"}
//       </button>
//       {errors.root && <div>{errors.root.message}</div>}
//     </form>
//   );
// };
