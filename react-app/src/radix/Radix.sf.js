
import { createStyle } from '@splitflow/designer/style'

export const style = createStyle('Radix', {
    "Input": {
        "padding": {
            "top": 1,
            "bottom": 1,
            "left": 1,
            "right": 1
        },
        "background": {
            "color": [
                310,
                50,
                93,
                1
            ]
        },
        "corner": {
            "topLeft": 0.5,
            "topRight": 0.5,
            "bottomLeft": 0.5,
            "bottomRight": 0.5
        },
        "border": {
            "tickness": 0.2,
            "color": [
                305,
                47,
                51,
                1
            ]
        },
        "typography": {
            "fontSize": 1.25,
            "fontWeight": 400,
            "color": [
                300,
                53,
                48,
                1
            ]
        }
    },
    "Label": {
        "typography": {
            "fontSize": 1.5,
            "fontWeight": 600,
            "color": [
                323,
                56,
                56,
                1
            ]
        }
    },
    "Record": {
        "layout": {
            "direction": "row",
            "mainAxisAlignment": "stretch",
            "crossAxisAlignment": "center",
            "spacing": 1
        }
    },
    "root": {
        "padding": {
            "top": 2,
            "bottom": 2,
            "left": 2,
            "right": 2
        },
        "layout": {
            "direction": "column",
            "mainAxisAlignment": "start",
            "crossAxisAlignment": "stretch",
            "spacing": 2
        }
    }
})
