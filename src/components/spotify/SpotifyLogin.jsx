import { express_baseurl } from "../../utils";

const SpotifyLogin = () => {
  const login = async () => {
    let userInfo = [];

    const timeout = 10000;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(`${express_baseurl}spotify/login`, {
        method: "GET",
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      clearTimeout(id);
      userInfo = await response.json();
    } catch (error) {
      console.error(error.message);
    }

    console.log(userInfo);
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default SpotifyLogin;
