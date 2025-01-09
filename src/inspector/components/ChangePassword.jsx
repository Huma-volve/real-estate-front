import { useForm } from "react-hook-form";
import { Button, Label, TextInput } from "flowbite-react";

export const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Password Changed:", data);
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
          htmlFor="currentPassword"
          value="كلمة المرور الحالية"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="currentPassword"
          type="password"
          placeholder="********"
          {...register("currentPassword", { required: "كلمة المرور مطلوبة" })}
          className={`mt-1 ${
            errors.currentPassword
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.currentPassword && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.currentPassword.message}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="newPassword"
          value="كلمة المرور الجديدة"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="newPassword"
          type="password"
          placeholder="********"
          {...register("newPassword", {
            required: "كلمة المرور الجديدة مطلوبة",
            minLength: {
              value: 8,
              message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
            },
          })}
          className={`mt-1 ${
            errors.newPassword
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.newPassword && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.newPassword.message}
          </p>
        )}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Label
          htmlFor="confirmPassword"
          value="تأكيد كلمة المرور"
          style={{
            color: "black",
            fontWeight: "500",
            marginBottom: "0.25rem",
            display: "block",
          }}
        />
        <TextInput
          id="confirmPassword"
          type="password"
          placeholder="********"
          {...register("confirmPassword", {
            required: "يرجى تأكيد كلمة المرور",
            validate: (value) =>
              value === watch("newPassword") || "كلمات المرور غير متطابقة",
          })}
          className={`mt-1 ${
            errors.confirmPassword
              ? "border-red-600 focus:ring-red-500"
              : "border-gray-300 focus:ring-orange-500"
          }`}
          style={{ backgroundColor: "white" , color: "black"}}
        />
        {errors.confirmPassword && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            {errors.confirmPassword.message}
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
