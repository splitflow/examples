
import { createStyle } from '@splitflow/designer/style'

export const style = createStyle('Navigation', {
    "Arrow": {
        "background": {
            "color": [
                294,
                51,
                50
            ]
        }
    },
    "Link": {
        "padding": {
            "top": 1,
            "bottom": 1,
            "left": 1,
            "right": 1
        }
    },
    "MenuList": {
        "background": {
            "color": [
                281,
                39,
                51
            ]
        },
        "layout": {
            "direction": "row",
            "mainAxisAlignment": "center",
            "crossAxisAlignment": "center",
            "spacing": 0
        },
        "corner": {
            "topLeft": 1.25,
            "topRight": 1.25,
            "bottomLeft": 1.25,
            "bottomRight": 1.25
        },
        "typography": {
            "fontSize": 1,
            "fontWeight": 500,
            "color": [
                0,
                0,
                100
            ]
        }
    },
    "Trigger": {
        "padding": {
            "top": 1,
            "bottom": 1,
            "left": 1,
            "right": 1
        }
    },
    "Viewport": {
        "background": {
            "color": [
                0,
                0,
                100
            ]
        },
        "border": {
            "tickness": 0.3,
            "color": [
                282,
                49,
                53,
                1
            ]
        },
        "corner": {
            "topLeft": 1,
            "topRight": 1,
            "bottomLeft": 1,
            "bottomRight": 1
        },
        "padding": {},
        "size": {
            "width": 20
        }
    },
    "root": {
        "padding": {}
    }
})
