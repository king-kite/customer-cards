import React, { useEffect, useRef, useState } from "react";

const useOutsideClick = () => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false)

	const handler = ({ target }) => {
		if (!ref?.current?.contains(target)) setVisible(false)
	}

	const handleClick = (value) => {
		setVisible(value || !visible)
	}

	useEffect(() => {
		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		}
	}, [])

	return {
		handleClick,
		ref,
		visible
	}

}

export default useOutsideClick;