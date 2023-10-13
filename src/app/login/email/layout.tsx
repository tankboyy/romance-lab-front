'use client';
import {redirect, usePathname} from "next/navigation";
import React from "react";
import Image from "next/image";
import arrow from "/public/main/arrow3.png";

export default function Layout({
																 children, // will be a page or nested layout
															 }: { children: React.ReactNode }) {
	const router = usePathname().split('/')[1];
	return (
		<section>
			{children}
		</section>
	);
}