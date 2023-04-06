it("pings with a session cookie", async () => {
  document.cookie = "FOO=ABCD1234";
  const response = await fetch("/ping");
  const text = await response.text();
  await expect(text).toBe("pong");
});

// Running this test alone through `it.only()` would work.
it("pings without a session cookie", async () => {
  document.cookie = "FOO=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  const response = await fetch("/ping");
  expect(response.status).toBe(401);
});
