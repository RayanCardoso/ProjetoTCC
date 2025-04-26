using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class ChangeUserColumnName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nome",
                table: "User");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "User",
                maxLength: 60,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "User");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "User",
                type: "character varying(60)",
                maxLength: 60,
                nullable: false,
                defaultValue: "");
        }
    }
}
