project_name: "noovle-big-data-analytics"

constant: VIS_LABEL {
  value: "Noovle Custom Collapsible Tree"
  export: override_optional
}

constant: VIS_ID {
  value: "Collapsible_tree_noovle"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  label: "@{VIS_LABEL}"
  file: "collapsible_tree.js"
  dependencies: []
}
