import { getURLWithQueryParams } from "../../helpers/auth";

import React from "react";
import axios from "axios";

const Oauth = (req, res) => {
  const LINKEDIN_URL = getURLWithQueryParams(
    "https://www.linkedin.com/oauth/v2/accessToken",
    {
      grant_type: "authorization_code",
      code: req.query.code,
      redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URL,
      client_id: process.env.NEXT_PUBLIC_LINKEDIN_KEY,
      client_secret: process.env.NEXT_PUBLIC_LINKEDIN_SECRET,
    }
  );

  const getUserLinkedin = async () => {
    const resp = await axios.post(LINKEDIN_URL, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    let { access_token, expires_in } = resp.data;

    let auth = `Bearer ${access_token}`;

    const getUser = await axios.get("https://api.linkedin.com/v2/me", {
      headers: { Connection: "foi difícil", Authorization: auth },
    });

    // if (typeof window !== "undefined") {
    //   console.log("Foi");
    //   localStorage.setItem("user", getUser.data);
    // } else {
    //   console.log("nao foi");
    // }

    // return res.redirect("/");
  };

  getUserLinkedin();
};

export default Oauth;
