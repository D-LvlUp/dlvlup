import { ClassTransformOptions, plainToInstance } from 'class-transformer';
import { validate, ValidatorOptions } from 'class-validator';

const ctOptions: ClassTransformOptions = {
	excludeExtraneousValues: true,
};

const vOptions: ValidatorOptions = {
	validationError: { target: false }
};

export function ultraMap<T>(type: new () => T, props?: object): T {
	const ins: any = plainToInstance(type, props, ctOptions);

	validate(ins, vOptions).then(errors => {
		if (errors.length > 0) {
			console.log(errors);
			throw new Error('Validation for class creation did not succeed.');
		}
	});
	return ins;
}
