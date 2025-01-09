import { useForm } from "react-hook-form";
import { Button, Label, TextInput } from "flowbite-react";

export const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Profile Updated:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        padding: "1.5rem",
        borderRadius: "0.375rem",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        color: "#000",
        marginTop: "1rem",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="username"
          value="اسم المستخدم"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="username"
          placeholder="محمد علي"
          {...register("username", { required: "اسم المستخدم مطلوب" })}
          className={`mt-1 ${
            errors.username
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.username && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.username.message}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="email"
          value="البريد الإلكتروني"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="email"
          type="email"
          placeholder="mail@yahoo.com"
          {...register("email", {
            required: "البريد الإلكتروني مطلوب",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "يرجى إدخال بريد إلكتروني صحيح",
            },
          })}
          className={`mt-1 ${
            errors.email
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.email && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="phone"
          value="رقم الجوال"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="phone"
          type="tel"
          placeholder="+966 50 569 1238"
          {...register("phone", {
            required: "رقم الجوال مطلوب",
            pattern: {
              value: /^\+966\s\d{2}\s\d{3}\s\d{4}$/,
              message: "يرجى إدخال رقم جوال صحيح بصيغة +966",
            },
          })}
          className={`mt-1 ${
            errors.phone
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.phone && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.phone.message}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="city"
          value="اختر مدينة"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="city"
          placeholder="الرياض"
          {...register("city", { required: "المدينة مطلوبة" })}
          className={`mt-1 ${
            errors.city
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.city && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.city.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-orange-900 hover:from-orange-900 hover:to-primary text-white font-medium rounded-md py-2"
      >
        تعديل
      </Button>
    </form>
  );
};
