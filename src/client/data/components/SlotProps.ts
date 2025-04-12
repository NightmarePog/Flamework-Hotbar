interface slotContsInterface {
	cornerSize: number;
	basePositions: UDim2[];
	minSize: number;
	maxSize: number;
	tweenTime: number;
	sizeOffset: number;
}

export interface slotProps {
	key: number;
	isSelected: boolean;
}

export const slotConsts: slotContsInterface = {
	cornerSize: 25,
	basePositions: [
		new UDim2(0, 20, 0, 20),
		new UDim2(1, -20 - 25, 0, 20),
		new UDim2(1, -20 - 25, 1, -20 - 25),
		new UDim2(0, 20, 1, -20 - 25),
	],
	maxSize: 150,
	minSize: 100,
	tweenTime: 0.5,
	sizeOffset: 30,
};
