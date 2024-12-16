const LanguageSelect = ({
	setLanguage,
}: { setLanguage: (lang: string) => void }) => {
	return (
		<select onChange={(e) => setLanguage(e.target.value)} defaultValue="">
			<option value="" disabled>
				Select a language
			</option>
			<option value="en">English</option>
			<option value="fr">Français</option>
			<option value="es">Español</option>
			<option value="de">Deutsch</option>
			<option value="it">Italiano</option>
		</select>
	);
};

export default LanguageSelect;
