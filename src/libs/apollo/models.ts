
//export type LabelsProps = LabelReferenceProps & LabelProps;
export interface ContentPreviewData {
	backgroundImageUrl?: string | null | undefined;
	logoUrl?: string| null | undefined;
	logoFallbackTitle?: string| null | undefined;
	showOnAirLabel?: string| null | undefined;
	subtitle?: string| null | undefined;
	eyelet?: {
		rating?: string;
		text?: string;
		showFullEpisodeLabel?: boolean;
		showOnAirLabel?: string | null | undefined;
	};
	body?: {
		rating?: string| null | undefined;
		text?: string| null | undefined;
	};
	expirationDate?: string| null | undefined;
	tvodExpirationDate?: number;
	videoInfo?: {
		//playRequest: PlayRequest;
		videoTimeout: number;
		//advContext?: CardPlayerFragment['advContext'];
		//analyticsContext?: CardPlayerFragment['analyticsContext'];
	};
}
