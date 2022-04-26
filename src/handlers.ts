import { ParameterizedContext, Next } from "koa";
import Mustache from "mustache";
import getMimeType from "./getMimeType";
import readFile from "./readFile";
import homepageData from "./data/homepage.json";

export async function homepage({
	response,
}: ParameterizedContext): Promise<void> {
	const template = await readFile("./templates/homepage.mst");
	const page = Mustache.render(template.toString(), homepageData);

	response.body = page;
}

export async function file({
	request,
	response,
}: ParameterizedContext): Promise<void> {
	const { path } = request;
	const [filepath] = path.split("?");
	const file = await readFile(`.${filepath}`);

	response.set("Content-Type", getMimeType(filepath));
	response.body = file;
}
