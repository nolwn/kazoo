export default function getMimeType(filename: string): string {
	const parts = filename.split(".");
	const ext = parts[parts.length - 1];

	switch (ext) {
		case "css":
			return "text/css";
		case "jpeg":
		case "jpg":
			return "image/jpeg";
		default:
			throw new Error("unknown media type");
	}
}
