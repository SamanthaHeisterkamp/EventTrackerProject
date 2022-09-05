package com.skilldistillery.witchualtracker.repositories;

import java.util.List;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.witchualtracker.entities.Ritual;

public interface RitualRepository extends JpaRepository<Ritual, Integer> {
	
	Ritual findById(Ritual id);
	
	List<Ritual> findByNameIgnoreCaseLikeOrPropertiesIgnoreCaseLikeOrIntentionsIgnoreCaseLikeOrWordsIgnoreCaseLikeOrIngredientsIgnoreCaseLikeOrInstructionsIgnoreCaseLikeOrIdealtimeIgnoreCaseLike(String name, String properties, String intention, String words, String ingredients, String instructions, String idealtime);

}
