import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";

mapboxgl.accessToken =
	"pk.eyJ1IjoiYW5pc21vbGxhIiwiYSI6ImNsano5eHp0MzAydmczZW5ueXo5Y3V0MHAifQ.bQt_6P4NF8XW8GH6240RXA";

const Map = ({ longitude, latitude }) => {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/mapbox/streets-v11",
			center: [longitude, latitude],
			zoom: 12,
		});

		// Add a custom marker icon
		const marker = new mapboxgl.Marker({
			color: "#ff0000",
			draggable: true,
		})
			.setLngLat([longitude, latitude])
			.addTo(map);

		// Add a popup with additional information
		// const popup = new mapboxgl.Popup({ closeButton: false })
		// 	.setLngLat([longitude, latitude])
		// 	.setHTML("")
		// 	.addTo(map);

		// Apply animation to the marker when clicked
		marker.getElement().addEventListener("click", () => {
			marker.togglePopup();
			marker.setDraggable(!marker.getDraggable());
		});

		return () => {
			map.remove();
		};
	}, [latitude, longitude]);

	return (
		<div id="map" className="" style={{ width: "100%", height: "400px" }}></div>
	);
};

Map.propTypes = {
	latitude: PropTypes.number.isRequired,
	longitude: PropTypes.number.isRequired,
};

export default Map;
