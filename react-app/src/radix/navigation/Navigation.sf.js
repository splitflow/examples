
import { createStyle } from '@splitflow/designer/style'

export const style = createStyle('Navigation', {
    "Arrow": {},
    "Content": {
        "padding": {
            "top": 1,
            "bottom": 1,
            "left": 1,
            "right": 1
        }
    },
    "List": {
        "layout": {
            "direction": "column",
            "mainAxisAlignment": "start",
            "crossAxisAlignment": "stretch",
            "spacing": 1
        }
    },
    "MenuList": {
        "padding": {
            "top": 1,
            "bottom": 1,
            "left": 1,
            "right": 1
        },
        "background": {
            "color": [
                149,
                39,
                51
            ]
        },
        "layout": {
            "direction": "row",
            "mainAxisAlignment": "center",
            "crossAxisAlignment": "stretch",
            "spacing": 3
        },
        "corner": {
            "topLeft": 2.5,
            "topRight": 2.5,
            "bottomLeft": 2.5,
            "bottomRight": 2.5
        }
    },
    "Viewport": {
        "padding": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0
        },
        "background": {
            "color": [
                151,
                42,
                69
            ]
        },
        "corner": {
            "topLeft": 0.75,
            "topRight": 0.75,
            "bottomLeft": 0.75,
            "bottomRight": 0.75
        },
        "border": {
            "tickness": 0.1,
            "color": [
                0,
                0,
                0,
                1
            ]
        }
    }
})
