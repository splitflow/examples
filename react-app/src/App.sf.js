
import { createStyle } from '@splitflow/designer/style'

export const style = createStyle('App', {
    "header": {
        "background": {
            "color": [
                220,
                13,
                18,
                1
            ]
        },
        "layout": {
            "direction": "column",
            "mainAxisAlignment": "center",
            "crossAxisAlignment": "center",
            "spacing": 1
        },
        "typography": {
            "fontSize": 1.75,
            "fontWeight": 400,
            "color": [
                0,
                0,
                100
            ]
        }
    },
    "link": {
        "typography": {
            "fontWeight": 400,
            "color": [
                193,
                95,
                68,
                1
            ]
        }
    },
    "logo": {
        "size": {
            "height": 20
        }
    }
})
