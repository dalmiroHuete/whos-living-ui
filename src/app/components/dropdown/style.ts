export const mainDropdownStyle = {
    position: "relative" as never,
    p: 2,
    w: "30%", // or width: "auto"
    ml: "35%",
    minW: "200px",
}

export const mainDropdownBoxStyle = {
    borderWidth:"1px",
    borderRadius:"md",
    padding: 2,
    cursor:"pointer",
    bg:"white",

}

export const dropdownListBoxStyle = {
    borderWidth: "1px",
    borderRadius: "md",
    mt: 2,
    bg: "white",
    position: "absolute" as never,
    width: "95%",
    zIndex: 1000,
    maxHeight: "200px",
    overflowY: "auto" as never
}

export const dropdownListItemStyle = {
    px: 3,
    py: 2,
    cursor: "pointer",
    _hover: { backgroundColor: '#9fc3f870'}
}
