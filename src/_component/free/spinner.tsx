import React, {useEffect, useState} from 'react';

export default function Spinner({open, text}: { open: boolean, text: string }) {
	const [spinnerOpen, setSpinnerOpen] = useState(open);

	useEffect(() => {
		setSpinnerOpen(open);
	}, [open]);
	if (!spinnerOpen) return null;

	return (
		<div className="relative z-50">
			<div
				className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full"
			>
				<div className="bg-[rgba(255,255,255,0.8)] fixed left-0 top-0 w-full h-full z-30 cursor-pointer"
						 onClick={() => setSpinnerOpen(false)}

				/>
				<div className="sk-fading-circle">
					<div className="sk-circle sk-circle1"></div>
					<div className="sk-circle sk-circle2"></div>
					<div className="sk-circle sk-circle3"></div>
					<div className="sk-circle sk-circle4"></div>
					<div className="sk-circle sk-circle5"></div>
					<div className="sk-circle sk-circle6"></div>
					<div className="sk-circle sk-circle7"></div>
					<div className="sk-circle sk-circle8"></div>
					<div className="sk-circle sk-circle9"></div>
				</div>
				<div className="text-center relative top-[50%] translate-y-[30px] font-bold text-[16px] z-30 leading-[12px]">
					{text}
				</div>
			</div>
		</div>
	);
}