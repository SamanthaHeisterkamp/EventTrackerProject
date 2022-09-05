package com.skilldistillery.witchualtracker.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Ritual {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String properties;
	
	private String intentions;
	
	private String words;
	
	private String ingredients;
	
	private String instructions;
	
	private String idealtime;

	public Ritual() {
	}

	public Ritual(int id, String name, String properties, String intentions, String words, String ingredients,
			String instructions, String idealtime) {
		super();
		this.id = id;
		this.name = name;
		this.properties = properties;
		this.intentions = intentions;
		this.words = words;
		this.ingredients = ingredients;
		this.instructions = instructions;
		this.idealtime = idealtime;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProperties() {
		return properties;
	}

	public void setProperties(String properties) {
		this.properties = properties;
	}

	public String getIntentions() {
		return intentions;
	}

	public void setIntentions(String intentions) {
		this.intentions = intentions;
	}

	public String getWords() {
		return words;
	}

	public void setWords(String words) {
		this.words = words;
	}

	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public String getInstructions() {
		return instructions;
	}

	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}

	public String getIdealtime() {
		return idealtime;
	}

	public void setIdealtime(String idealtime) {
		this.idealtime = idealtime;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Ritual other = (Ritual) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Ritual [id=" + id + ", name=" + name + ", properties=" + properties + ", intentions=" + intentions
				+ ", words=" + words + ", ingredients=" + ingredients + ", instructions=" + instructions
				+ ", idealtime=" + idealtime + "]";
	}
	
	
	
	
	
}
	

	