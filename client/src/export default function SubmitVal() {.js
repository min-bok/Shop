export default function SubmitVal() {
  const SubmitData = async (e) => {
    e.preventDefault();
    const url = "/api/auth/signup";
    const val = [email, password];
    try {
      const result = await axios.post(url, {
        val,
      });
      console.log(result);
      alert(result.data.msg);
      window.location.href = "/login";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <Form method="post" onSubmit={SubmitData}>
      <Button name="회원가입" />
    </Form>
  );
}
