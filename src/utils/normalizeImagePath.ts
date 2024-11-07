export const normalizeImagePath = (image?: string) => {
	if (!image) return

	return image.replace('[', '').replace(']', '').replaceAll('"', '')
}
