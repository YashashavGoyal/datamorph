import yaml from 'js-yaml';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { parse as parseToml } from 'smol-toml';
import { stringify as tomlStringify } from '@iarna/toml';

export type Format = 'JSON' | 'YAML' | 'XML' | 'TOML';

const xmlParser = new XMLParser({ ignoreAttributes: false });
const xmlBuilder = new XMLBuilder({ ignoreAttributes: false, format: true });

export function parseInput(text: string, format: Format): any {
    if (!text.trim()) return null;

    switch (format) {
        case 'JSON':
            return JSON.parse(text);
        case 'YAML':
            return yaml.load(text);
        case 'XML':
            return xmlParser.parse(text);
        case 'TOML':
            return parseToml(text);
        default:
            throw new Error(`Unsupported input format: ${format}`);
    }
}

export function serializeOutput(data: any, format: Format): string {
    if (data === null || data === undefined) return '';

    switch (format) {
        case 'JSON':
            return JSON.stringify(data, null, 2);
        case 'YAML':
            return yaml.dump(data);
        case 'XML':
            let xmlData = data;

            // For XML Consistency
            if (Array.isArray(xmlData)) {
                xmlData = { root: xmlData };
            }

            if (typeof xmlData !== 'object') {
                xmlData = { root: xmlData };
            }
            return xmlBuilder.build(xmlData);
        case 'TOML':
            try {
                return tomlStringify(data);
            } catch (e: any) {
                throw new Error(`TOML serialization failed: ${e.message}`);
            }
        default:
            throw new Error(`Unsupported output format: ${format}`);
    }
}

export function convertData(text: string, inputFormat: Format, outputFormat: Format): string {
    try {
        const data = parseInput(text, inputFormat);
        return serializeOutput(data, outputFormat);
    } catch (err: any) {
        throw new Error(err.message || 'Conversion failed');
    }
}
