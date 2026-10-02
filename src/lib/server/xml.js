export function escapeXml(value) {
	const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
	return String(value ?? '').replace(/[&<>"']/g, (character) => entities[character]);
}
