'use client';
import {redirect, usePathname} from "next/navigation";
import React from "react";
import Link from "next/link";

export default function Layout({
																 children, // will be a page or nested layout
															 }: { children: React.ReactNode }) {
	return (
		<section>
			<nav></nav>
			{children}
		</section>
	);
}