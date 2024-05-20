import { defineSettings } from "@curves_digital/builder/settings";

const [ settingsPlugin, useSettings ] = defineSettings({
  page: {
    headerType: { type: "string", name: "Тип хэдера", enum: [ "content", "landing", "none" ]}
  },
  site: {
    name: "string",
    header: {
      links: {
        type: "array",
        items: {
          title: { type: "string" },
          to: { type: "string" }
        }
      }
    }
  }
})

export { settingsPlugin, useSettings }