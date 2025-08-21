import React from "react";
import { Form, Button, Input } from "antd";

const OTPForm: React.FC = () => {
  // 👇 'any' hata kar generic type diya hai
  const handleFinish = (values: Record<string, string>) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <Form.Item
        label="Enter OTP"
        rules={[{ required: true, message: "Please enter the OTP!" }]}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* First Three Inputs */}
          {Array.from({ length: 3 }).map((_, i) => (
            <Input
              key={i}
              type="text"
              maxLength={1}
              defaultValue="0"
              style={{
                width: "44.57px",
                height: "64px",
                textAlign: "center",
                marginRight: "10px",
                borderRadius: "8px",
                fontSize: "18px",
                color: "#9DA1A9",
              }}
              className="otp-input"
            />
          ))}

          {/* Dash */}
          <span style={{ fontSize: "24px", marginRight: "10px" }}>-</span>

          {/* Last Three Inputs */}
          {Array.from({ length: 3 }).map((_, i) => (
            <Input
              key={i + 3}
              type="text"
              maxLength={1}
              defaultValue="0"
              style={{
                width: "44.57px",
                height: "64px",
                textAlign: "center",
                marginRight: "10px",
                borderRadius: "8px",
                fontSize: "18px",
                color: "#9DA1A9",
              }}
              className="otp-input"
            />
          ))}
        </div>
      </Form.Item>

      <Form.Item>
        <Button
          href="/ReNewPassword"
          className="py-[10px] text-black border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform rounded-[8px] px-24 md:px-[140.5px]"
          type="primary"
          htmlType="submit"
        >
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OTPForm;
