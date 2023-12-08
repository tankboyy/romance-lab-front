import {useRecoilState} from "recoil";
import {useEffect} from "react";
import {timelineListState, TimelineListType} from "@/recoil/atoms";


export default function UseUpdateTimelineList(props: TimelineListType) {
	const [timelineList, setTimelineList] = useRecoilState(timelineListState);
	useEffect(() => {
		setTimelineList(prev => [...prev, props]);
	}, []);
}