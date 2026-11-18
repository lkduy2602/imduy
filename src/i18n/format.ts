import config from "@/config";
import { resolveTimezone } from "@/utils/resolveTimezone";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Replace `{{key}}` placeholders in UI strings.
 * Translators can reorder placeholders freely within the sentence.
 */
export function tplStr(
  template: string,
  vars: Record<string, string | number>
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const value = vars[key];
    return value !== undefined && value !== null ? String(value) : "";
  });
}

/**
 * Formats date and time with locale and timezone support.
 * Compliant with AstroPaper's official i18n date formatting specification.
 */
export function formatDatetime(
  datetime: string | Date,
  locale?: string,
  postTimezone?: string,
  format: string = "D MMM, YYYY"
) {
  const activeLocale = locale ?? config.site.lang ?? "en";
  const zone = resolveTimezone(postTimezone ?? config.site.timezone);
  const d = dayjs(datetime).tz(zone).locale(activeLocale);

  return {
    raw: d.toISOString(),
    formatted: d.format(format),
  };
}
