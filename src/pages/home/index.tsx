import React from "react";

import { Header } from "components/Home/Header";
import { SignIn } from "components/Home/SignIn";
import { HomeProvider } from "common/hooks/useHome";
import { SignUp } from "components/Home/SignUp";
import { Banner } from "components/Home/Banner";
import { About } from "components/Home/About";

export default function Home() {
	return (
		<HomeProvider>
			<Header />
			<SignIn />
			<SignUp />
			<Banner />
			<About />
		</HomeProvider>
	);
}